#-*- coding: utf-8 -*-
from django.conf.urls import include, url, patterns
from rest_framework_nested import routers
from ManicurToDay import settings
from authentication.views import AccountViewSet, LoginView, LogoutView
from ManicurToDay.views import IndexView
from post.views import AccountClientViewSet, ClientViewSet

router=routers.SimpleRouter()
router.register(r'accounts', AccountViewSet)
router.register(r'clients', ClientViewSet)

accounts_router = routers.NestedSimpleRouter(
    router,r'accounts',lookup='account'
)
accounts_router.register(r'clients',AccountClientViewSet)
urlpatterns =patterns(
    '',
    url(r'^api/v1/',include(router.urls)),
    url(r'^api/v1/',include(accounts_router.urls)),
    url(r'^api/v1/auth/login/$',LoginView.as_view(), name='login'),
    url(r'^api/v1/auth/logout/$',LogoutView.as_view(), name='logout'),
    url('^.*',IndexView.as_view(),name='index'),
    )
if settings.DEBUG:
    import debug_toolbar
    urlpatterns += patterns('',
        url(r'^__debug__/', include(debug_toolbar.urls)),
    )
    
 
