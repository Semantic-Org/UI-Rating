var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-rating',
  summary : 'Semantic UI - Rating (official): Single component release of rating',
  version : '1.9.2',
  git     : 'git://github.com/Semantic-Org/UI-Rating.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
