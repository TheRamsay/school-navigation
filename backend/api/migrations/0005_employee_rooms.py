# Generated by Django 4.0.3 on 2022-04-21 22:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_employeetitle_table_alter_title_table'),
    ]

    operations = [
        migrations.AddField(
            model_name='employee',
            name='rooms',
            field=models.ManyToManyField(related_name='rooms', through='api.EmployeeRoom', to='api.room'),
        ),
    ]
