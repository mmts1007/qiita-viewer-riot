require('./raw.tag');
<item>
  <li class="media">
    <div class="media-left">
      <a href="http://qiita.com/{user.id}">
        <img class="media-object img-rounded" riot-src={ user.profile_image_url } width="50">
      </a>
    </div>
    <div class="media-body">
      <strong class="media-heading">{ user.id }</strong>
      <h4>
        <a href="{ url }">
          { title }
        </a>
        <button class="btn btn-default btn-sm pull-right" onclick={ toggle }>
          Show more
        </buttom>
      </h4>
      <div class="body">
        <raw content={ rendered_body } show={ showsBody }></raw>
      </div>
    </div>
  </li>
  <hr>
  <script>
    this.showsBody = false

    this.toggle = (e) => {
      this.showsBody = !this.showsBody
    }
  </script>
  <style>
    hr {
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .body{
      width: 750px;
    }
  </style>
</item>
