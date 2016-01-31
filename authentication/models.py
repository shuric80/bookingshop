from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class AccountManager(BaseUserManager):
    def create_user(self,email,password=None,**kwargs):
        print 'createuser%s'%email
        if not email:
            raise ValueError('User must have a valid email address.')
        if not kwargs.get('username'):
            raise ValueError('User must have username.')
        account =self.model(email=self.normalize_email(email),username=kwargs.get('username'))
        account.set_password(password)
        account.save()
        return account

    def create_superuser(self, email, password,**kwargs):
        account=self.create_user(email,password,**kwargs)
        account.is_admin=True
        account.save()
        return account

class Account(AbstractBaseUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=20, unique=True)
    address = models.CharField(max_length=50, blank=True)
    phone = models.IntegerField(blank=True, null=True)
    #time_at = models.DateTimeField(blank=True)
    #time_to = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    about_at = models.CharField(max_length=400,blank=True)
    objects=AccountManager()
      
    USERNAME_FIELD='email'
    REQUIRED_FIELDS=['username',]

    def __unicode__(self):
        return self.email

    #def get_full_name(self):
    #  return ' '.join([self.first_name, self.last_name])

    #def get_short_name(self):
    #    return self.first_name

            
