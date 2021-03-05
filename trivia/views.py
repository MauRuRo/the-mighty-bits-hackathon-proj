from django.shortcuts import render


def trivia(request):
    """ a view to render the home page """
    return render(request, 'trivia/trivia.html')


def home(request):
    """ a view to render the home page """
    return render(request, 'trivia/landingpage.html')
