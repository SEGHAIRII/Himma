# Generated by Django 4.2.7 on 2023-12-26 09:31

import django.contrib.postgres.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("users", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="article",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("content", models.TextField(verbose_name="content")),
                (
                    "img",
                    models.FileField(
                        blank=True,
                        null=True,
                        upload_to="images/",
                        verbose_name="images",
                    ),
                ),
                ("title", models.CharField(max_length=1000, verbose_name="Title")),
                ("likes", models.PositiveIntegerField(default=0)),
                ("creation_date", models.DateTimeField(auto_now_add=True, null=True)),
                (
                    "categories",
                    django.contrib.postgres.fields.ArrayField(
                        base_field=models.CharField(
                            blank=True, max_length=100, null=True
                        ),
                        blank=True,
                        default=list,
                        null=True,
                        size=None,
                    ),
                ),
                (
                    "author",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="users.user"
                    ),
                ),
            ],
        ),
    ]
