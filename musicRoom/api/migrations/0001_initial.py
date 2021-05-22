# Generated by Django 3.2.3 on 2021-05-22 11:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Room',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=8, unique=True, verbose_name='')),
                ('host', models.CharField(max_length=255, unique=True)),
                ('guests_can_skip', models.BooleanField(default=False)),
                ('votes_to_skip', models.IntegerField(default=0)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
