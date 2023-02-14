from django import forms


class TextForm(forms.Form):
    class Meta:
        text = forms.CharField()
        field = ('text')
