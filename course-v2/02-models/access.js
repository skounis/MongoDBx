var mongoose = require('mongoose');
var userSchema = require('./models/user');

var User = mongoose.model('User', userSchema);

var u = new User({
  profile: { username: 'vkarpov15' }
});
console.log('Step 1 - user: ');
console.log(u);

modifyUserProfile(u, {
  picture: 'http://pickaface.net/avatar/maxpawer565b5629d05e7.png'
});

// modifyUserData can **only** modify
// user.profile, not user.data
function modifyUserProfile(user, profile, callback) {
  console.log('Step 2 - user: ');
  user.profile = profile;
  console.log(user);

  user.save(function(error, user) {
    // handle result
    if (error){
      console.log(error);
    }

    console.log('Step 3 - user: ');
    console.log(user);
  });
}
