from django.shortcuts import render, redirect
from django.http import JsonResponse
import requests,json

def getAccess(request):
    body = {
        "grant_type" : "authorization_code",
        "client_id" : "u-s4t2ud-efcc8e66b983be9efb232954353e4c449b3df5021a5e2853b14a72e64955bb6e",
        "client_secret" : "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",
        "redirect_uri" : "http://localhost:8000/get/",
        "code" : request.GET.get('code')
    }
    url = 'https://api.intra.42.fr/oauth/token'
    resp = requests.post(url, data=body)
    if resp.status_code != 200:
        return JsonResponse({'status': 'Forbidden'}, status=403)
    access = resp.json()['access_token']

    return redirect(f'http://localhost:3000/?access={access}')

def get_poolers(request):
    try:
        page = 1
        users = []
        campus_id = {
            'Benguerir': 21,
            'Khouribga': 16,
            'Tetouan': 2
        }

        access = request.GET.get('access')
        if not access:
            return redirect('https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-efcc8e66b983be9efb232954353e4c449b3df5021a5e2853b14a72e64955bb6e&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fget%2F&response_type=code')
        campus = request.GET.get('campus')
        month = request.GET.get('month')

        print(request.session.get(campus))
        if request.session.get(campus) != None:
            return JsonResponse({'status': 'success', 'users': request.session.get(campus)})

        while True:
            url = f"https://api.intra.42.fr/v2/campus/{campus_id[campus]}/users"
            headers = { "Authorization": f"Bearer {access}" }
            params = {
                "created_at": "2024-06-01T00:00:00.000Z..2024-06-30T23:59:59.999Z",
                "filter[pool_month]": {month},
                "filter[pool_year]": "2024",
                "page[number]": page,
                "page[size]": 100,
                # "sort": 'kind, -level',
            }
            response = requests.get(url, headers=headers, params=params)
            data = response.json()
            if not data:
                break
            users.extend(data)
            page += 1
    except Exception as e:
        print(f'error : {e}')
        return JsonResponse({'status': 'failed'}, status=403)
    request.session[campus] = users
    return JsonResponse({'status': 'success', 'users': users})