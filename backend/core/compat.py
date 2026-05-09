def patch_django_template_context_copy():
    """Patch Django context copying for Python 3.14's stricter copy(super())."""
    from django.template.context import BaseContext

    def copy_context(self):
        duplicate = self.__class__.__new__(self.__class__)
        duplicate.__dict__.update(self.__dict__)
        duplicate.dicts = self.dicts[:]
        return duplicate

    BaseContext.__copy__ = copy_context
