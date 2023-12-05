from django.shortcuts import render, redirect 
from django.http import HttpResponse 

# Create your views here.

def bienvenida(request):
    return render(request, 'index.html')
    
def login(request):
    return render(request, 'login.html')

def register(request):
    return render(request, 'register.html')

def menuUsers(request):
    return render(request, 'menuUsuarios.html')

def reportesUsers(request):
    return render(request, 'reporteUsuarios.html')

def seguimientoReporteUser(request):
    return render(request, 'seguimientoReporte.html')

def listaReporteAdmin(request):
    return render(request, 'listaReportesAdmin.html')

def editarReporteAdmin(request):
    return render(request, 'editarReporteAdmin.html')