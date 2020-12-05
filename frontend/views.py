from django.shortcuts import render

# Create your views here.
def index(request,*agrs, **kwargs):
    template_name="frontend/index.html"
    return render(request,template_name)

def join(request,*agrs, **kwargs):
    template_name="frontend/index.html"
    return render(request,template_name)

def create(request,*agrs, **kwargs):
    template_name="frontend/index.html"
    return render(request,template_name)
