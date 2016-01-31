# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0003_remove_account_time_at'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='account',
            name='time_to',
        ),
    ]
