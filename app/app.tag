require('./item.tag');
<app>
  <div class="container">
    <h1>すべての投稿</h1>
    <div show={ items == null }>
      <spinner></spinner>
    </div>
    <div show={ items != null }>
      <ul class="media-list">
        <hr>
        <item each={ items }></item>
      </ul>
    </div>
  </div>
  <script type="es6">
    var self = this
    this.items = null

    fetch('https://qiita.com/api/v2/items').then((response) => {
      return response.json()
    }).then((json) => {
      self.items = json
      self.update()
    })
  </script>
  <style>
    hr {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  </style>
</app>
