# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='time_at',
            field=models.DateTimeField(blank=True),
        ),
        migrations.AlterField(
            model_name='account',
            name='time_to',
            field=models.DateTimeField(blank=True),
        ),
    ]
