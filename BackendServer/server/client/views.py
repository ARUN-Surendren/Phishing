from django.shortcuts import render

# Create your views here.
#Receiving from the client
def client(request):
    return render(request,"client/home.html")
def display(request):
    url=request.GET.get('url')
    print(url)
    return render(request,"client/home.html")
