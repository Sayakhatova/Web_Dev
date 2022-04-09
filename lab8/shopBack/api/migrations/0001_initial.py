from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=300)),
                ('price', models.FloatField(default=0)),
                ('description', models.TextField()),
                ('count', models.IntegerField()),
                ('is_active', models.BooleanField(default=False)),
                ('rating', models.FloatField(default=0)),
                ('likes', models.IntegerField(default=0)),
                ('link', models.TextField()),
                ('image_url', models.TextField()),
                ('category', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='api.Category')),
            ],
        ),
    ]