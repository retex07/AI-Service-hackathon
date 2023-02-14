from django.shortcuts import render
from .forms import TextForm
from transformers import GPT2LMHeadModel, GPT2Tokenizer
import torch, requests
from django.http import HttpResponse

text='Идея'
# Create your views here.

def text_made(request):
    global text
    DEVICE = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    # Для наглядности будем работать с русскоязычной GPT от Сбера.
    # Ниже команды для загрузки и инициализации модели и токенизатора.
    model_name_or_path = "sberbank-ai/rugpt3large_based_on_gpt2"
    tokenizer = GPT2Tokenizer.from_pretrained(model_name_or_path)
    model = GPT2LMHeadModel.from_pretrained(model_name_or_path).to(DEVICE)

    text = request.GET.get("start_text")

    input_ids = tokenizer.encode(text, return_tensors="pt").to(DEVICE)
    model.eval()
    with torch.no_grad():
        out = model.generate(input_ids,
                             do_sample=True,
                             num_beams=5,
                             temperature=1.5,
                             max_length=60)

    # Декодирование токенов
    generated_text = list(map(tokenizer.decode, out))[0]
    # print(generated_text)
    return HttpResponse(generated_text)


def index(request):
    global text
    submitbutton = request.POST.get("submit")


    form = TextForm(request.POST or None)

    if form.is_valid():

        text = request.POST.get("text")
    context = {'form': form, 'text': text}
    print(text)
    return render(request, 'products/index.html', context)
