from django.db import models
from django_google_maps import fields as map_fields


class TriviaLocation(models.Model):
    address = map_fields.AddressField(max_length=200)
    geolocation = map_fields.GeoLocationField(max_length=100)

    def __str__(self):
        return self.address
