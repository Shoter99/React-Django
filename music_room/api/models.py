from django.db import models
import string, random
def generate_code():
    length = 6
    while True:
        code = random.choice(''.join(string.ascii_lowercase, k=length))
        if Room.objects.filter(code=code).count() == 0:
            break
    return code
# Create your models here.
class Room(models.Model):
    code = models.CharField(max_length=8, unique=True, null=False)
    host = models.CharField(max_length=255, unique=True, null=False)
    guest_can_pause = models.BooleanField(null=False, default=False)
    votes_to_skip = models.IntegerField(null=False, default=1)
    created_at = models.DateTimeField(auto_now_add=True)