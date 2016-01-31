# -*- coding: utf-8 -*-
from django.db import models
from django.contrib.auth.models import User
from authentication.models import Account
import os

class Client(models.Model):
    user = models.ForeignKey(Account)
    #date= models.CharField(verbose_name=u'Date', help_text=u'Date', max_length=12)
    time = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    client = models.CharField(verbose_name=u'First_name', max_length=20)
    phone_client = models.CharField(verbose_name=u'Phone client', max_length=12)
        
    class Meta:
        verbose_name_plural='user'
        ordering=['id']

    def __unicode__(self):
        return self.user


         
    
    
    
    
