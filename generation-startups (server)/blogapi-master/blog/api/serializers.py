from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Generation
from .models import Post, Comment, Category


class CategorySerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    posts = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ['id', 'name', 'owner', 'posts']


class PostSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    comments = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Post
        fields = ['id', 'title', 'body', 'owner', 'comments', 'categories']


class UserSerializer(serializers.ModelSerializer):
    posts = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    comments = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    categories = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'posts', 'comments', 'categories']


class CommentSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Comment
        fields = ['id', 'body', 'owner', 'post']


class GenerationSerializer(serializers.ModelSerializer):
    text = serializers.CharField(max_length=128)

    def create(self, validated_data):
        return Generation.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.text = validated_data.get('text')
        instance.save()
        return instance

    class Meta:
        model = Generation
        fields = ['id', 'text', 'output']
    #     fields = ['text']
# serializer = GenerationSerializer(Generation)
# serializer.data
