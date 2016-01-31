from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.generic.base import TemplateView
from django.utils.decorators import method_decorator

class IndexView(TemplateView):
    template_name='index.html'
    print 'index:'

    @method_decorator(ensure_csrf_cookie)
    def dispatch(self, *args,**kwargs):
        for i in self.request:
            print i
        return super(IndexView,self).dispatch(*args,**kwargs)
