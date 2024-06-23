from django.shortcuts import render
from django.http import JsonResponse
import requests,json

def getAccess():
    body = {
        "grant_type": "client_credentials",
        "client_id": "u-s4t2ud-efcc8e66b983be9efb232954353e4c449b3df5021a5e2853b14a72e64955bb6e",
        "client_secret": "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"
    }
    url = 'https://api.intra.42.fr/oauth/token'
    resp = requests.post(url, data=body)
    access = resp.json()['access_token']
    print(f'->>{access}')
    return access

def get_all_campuses():
    url = "https://api.intra.42.fr/v2/campus"
    Headers = {'Authorization': f'Bearer {getAccess()}'}
    all_campuses = []
    while url:
        response = requests.get(url, headers=Headers)
        campuses = response.json()
        all_campuses.extend(campuses)
        url = response.links['next']['url'] if 'next' in response.links else None
    return all_campuses

def campuse_id(campuse_name):
    campuses = get_all_campuses()
    for campus in campuses:
        if campus["name"] == campuse_name:
            print(campus["id"])
            return campus["id"]

def getLevel(users, Headers):
    for user in users:
        response = requests.get(f'https://api.intra.42.fr/v2/users/{user["id"]}', headers=Headers)
        LevelResp = response.json()["cursus_users"]
        user.update({"level": LevelResp[0]["level"]})
        print(json.dumps(user))

def get_poolers(request):
    try:
        page = 1
        users = []
        campus = request.GET.get('campus')
        month = request.GET.get('month')
        campus_id = campuse_id(campus)

        while True:
            url = f"https://api.intra.42.fr/v2/campus/{campus_id}/users"
            headers = { "Authorization": f"Bearer {getAccess()}" }
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
    return JsonResponse({'status': 'success', 'users': users})
