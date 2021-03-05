from django.contrib import admin
from django_google_maps import widgets as map_widgets
from django_google_maps import fields as map_fields

class TriviaLocationAdmin(admin.ModelAdmin):
    formfield_overrides = {
        map_fields.AddressField: {'widget': map_widgets.GoogleMapsAddressWidget},
    }


# from .models import TriviaLocation


# class TriviaLocationAdmin(admin.ModelAdmin):
#     fields = ('address', 'geolocation')

# admin.site.register(TriviaLocation, TriviaLocationAdmin)
