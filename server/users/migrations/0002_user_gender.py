# Generated by Django 4.2.7 on 2023-12-26 09:40

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("users", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="gender",
            field=models.CharField(
                choices=[("MALE", "MALE"), ("FEMALE", "FEMALE")],
                default="MALE",
                max_length=50,
            ),
        ),
    ]
