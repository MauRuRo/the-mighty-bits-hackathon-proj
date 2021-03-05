from django.shortcuts import render


def index(request):
    """ a view to render the home page """
    return render(request, 'trivia/home.html')
