from django.shortcuts import render, redirect 
from django.http import HttpResponse 

# Create your views here.

def bienvenida(request):
    return render(request, 'index.html')

def login(request):
    return render(request, 'login.html')