# Generated by Django 3.0.4 on 2020-03-24 14:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_product_category_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='category_id',
            new_name='category',
        ),
    ]