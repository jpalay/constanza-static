#/usr/bin/env python
import Image
import cropresize
import os

files = os.listdir('images/')
files = [f for f in files if not str(f) == '.DS_Store']
for f in files:
    img = Image.open('images/' + str(f))
    img = cropresize.crop_resize(img, (230, 172))
    img.save('thumbs/' + str(f))
    print """<a class="fancybox" href="images/may2013/images/{0}" rel="may2013"><img src="images/may2013/thumbs/{0}"></a>
    """.format(str(f))
