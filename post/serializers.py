#-*- coding: utf-8 -*-
from rest_framework import serializers
from authentication.serializers import AccountSerializer
from post.models import Client

class ClientSerializer(serializers.ModelSerializer):
    user=AccountSerializer(read_only='True',required=False)

    class Meta:
        model = Client
        fields = ('id','user','time','client','phone_client','created_at')
        read_only_fields = ('id','created_at')
        
    def get_validation_exclusions(self,*args,**kwargs):
        exclusions=super(PostSerializer,self).get_validation_exclusions()
        return exclusions+['user']
