from rest_framework import permissions

class IsAdminOfClient(permissions.BasePermission):
    message='Adding custom'
    def has_object_permission(self,request,view,post):
        if request.user:
            return post.user == request.user
        return False
    
