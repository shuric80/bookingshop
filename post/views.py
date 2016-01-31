# -*- coding:utf-8 -*-
from rest_framework import permissions, viewsets
from rest_framework.response import Response
from post.models import Client
from post.permissions import IsAdminOfClient
from post.serializers import ClientSerializer
from rest_framework.decorators import detail_route
from rest_framework import renderers

import simplejson
import os

class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.order_by("-id")
    serializer_class = ClientSerializer

    def retrieve(self, request, pk=None):
        queryset = self.queryset.filter(id=pk)
        serializer = self.serializer_class(queryset, many = True)
        return Response(serializer.data)
    
    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)
        return (permissions.IsAuthenticated(),IsAdminOfPost(),)
         
    def perform_create(self, serializer):
        instanse = serializer.save(user = self.request.user)
        return super(ClientViewSet, self).perform_create(serializer)
    
class AccountClientViewSet(viewsets.ViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

    def retrieve(self,request,pk=None):
        print 'retrieve'
        queryset = self.queryset.filter(id=pk)
        serializer = self.serializer_class(queryset, many = True)
        return Response(serializer.data)
        
    def list(self, request,  account_username=None):
        print 'list'
        queryset =  self.queryset.filter(user__username = account_username)
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
def data():
    pass
    """
    if not os.path.isfile('media/data.json'):
        genericJSON()
    try:
        f =open('media/data.json','r')
    except:
        print('Error open file')
        #return HttpResponse(simplejson.dumps({'err':'Error open data.json'}))
        
    json_data = f.read()
    f.close()
    
    return json_data
    #return HttpResponse(simplejson.dumps(json_data), content_type='application/json; charset=utf-8') 
      """
def add(request):
    if request.method =="POST" and request.is_ajax:
        form = SalonForm(request.POST)
        if form.is_valid():
           form.save()   
        else:
            return HttpResponse(simplejson.dumps({'err':'No valid'}))
        
        return HttpResponse(simplejson.dumps({'err':'Ok'}))
    else:
        return HttpResponse(simplejson.dumps({'err':'Error'}))

def genericJSON():
    print('generic')
    HEAD = '{ "type":"FeatureCollection", "features":['
    list_obj = Salon.objects.values('id', 'name', 'w_geocode', 'h_geocode','phone','address','about_to','site','email')

    #list_obj = Salon.objects.all()
    
    try:
        f = open('media/data.json','w')
    except:
        print('error file')
    json_file=str()

    json_file += HEAD
        
    for  i in list_obj:
        json =  { "type":"Feature",
                 "id":i['id'],
                 "geometry":
                   {
                     "type":"Point",
                     "coordinates":[ i['h_geocode'], i['w_geocode'] ]
                    },
                  "properties":{
                                  "ballonContent":
                                     {
                                         'name':i['name'],
                                         'phone':i['phone'],
                                         'address':i['address'],
                                          'email':i['email'],
                                          'site':i['site'],
                                          'about_to':i['about_to']
                                      },
                             
                                  "clusterCaption":'test',
                                  "hintContent":'test'
                               }                                                      
           }
        json_file += str(simplejson.dumps(json))
        json_file += str(',')
            
    f.write(json_file[0:-1]+str(']}')) 
    f.close()

        
        


    
