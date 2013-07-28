#!/usr/bin/env python
from urllib import urlopen

categories = ['people', 'nature']
per_category = 10
base_url = 'http://lorempixel.com/'
for c in categories:
    for i in range(per_category):
        print '{0} {1}'.format(c, i + 1)
        thumb = urlopen(base_url + '400/300/' + c + '/' + str(i + 1)).read()
        full = urlopen(base_url + '1000/800/' + c + '/' + str(i + 1)).read()
        with open('thumbs/{0}{1}.jpg'.format(c, i + 1), 'w') as f:
            f.write(thumb)
        with open('images/{0}{1}.jpg'.format(c, i + 1), 'w') as f:
            f.write(full)
