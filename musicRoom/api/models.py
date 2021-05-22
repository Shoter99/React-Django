from django.db import models
import random
import string


def generate_code():
    digits = 6
    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=digits))
        if Room.objects.filter(code=code).count() == 0:
            break
    return code


# Create your models here.
class Room(models.Model):
    code = models.CharField(default=generate_code, max_length=8, unique=True)
    host = models.CharField(max_length=255, unique=True, null=False)
    guests_can_pause = models.BooleanField(null=False, default=False)
    votes_to_skip = models.IntegerField(null=False, default=0)
    created_at = models.DateTimeField(auto_now_add=True)
