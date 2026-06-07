from rest_framework import serializers

from .models import ContactMessage


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['id', 'name', 'email', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']


class ContactMessageCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['name', 'email', 'message']

    def validate_message(self, value: str) -> str:
        if not value or not value.strip():
            raise serializers.ValidationError('Message cannot be empty.')
        # Your frontend says message can be short; keep validation reasonable.
        if len(value) < 10:
            raise serializers.ValidationError('Message must be at least 10 characters.')
        return value

    def validate(self, attrs: dict) -> dict:
        # Make sure all expected fields exist (avoids vague 400s)
        missing = [f for f in ('name', 'email', 'message') if not attrs.get(f)]
        if missing:
            raise serializers.ValidationError({f: 'This field is required.' for f in missing})
        return attrs


