
from django.contrib.auth import update_session_auth_hash
from rest_framework import serializers
from authentication.models import Account
from post.models import Client

class AccountSerializer(serializers.ModelSerializer):
    password=serializers.CharField(write_only=True, required=False)
    charset="utf-8"
    class Meta:
        model=Account
        fields=('id','email','username','created_at','password','about_at','address','phone')
        #fields=('id','email','username','password')
        read_only_fields=('created_at',)

        def create(self, validated_data):
            return Account.objects.create(**validated_data)

        def update(self, instance, validated_data):
            instance.username=validated_data.get('username',instance.username)
            instance.save()
            password=validated_data.get('password',None)
            if password:
                instance.set_password(password)
                instance.save()
                update_session_auth_hash(self.context.get('required'), instance)

            return instance
        
