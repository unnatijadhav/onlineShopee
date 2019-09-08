import { Template } from 'meteor/templating';
import { Images } from '../startup.js';
import { Session } from 'meteor/session';

import './main.html';

Template.images.helpers({
  images: function () {
    if (Session.get("product") == "watch") {
      return Images.find({ product: "watches" });
    }
    else if (Session.get("product") == "mobile") {
      return Images.find({ product: "mobiles" });
    }
    else if (Session.get("product") == "laptop") {
      return Images.find({ product: "laptops" });
    }
    else if (Session.get("product") == "tv") {
      return Images.find({ product: "tv" });
    }
  }
});


// Template.images.data = function () {
//   return Images.find({ product: "watches" }).fetch();

// }




Template.images.events({
  'click .buyNow': function (event) {
    console.log(this._id);
    console.log(this.count);
    if (this.count == 0)
      alert("Out of stock !!!");
    else {
      Images.update({ _id: this._id }, {
        $inc: { count: - 1 }
      });
      alert("Congratulations !! Order confirmed");
    }
  },

  'click .watches': function (event) {
    Session.set("product", "watch");
  },
  'click .mobiles': function (event) {
    Session.set("product", "mobile");
  },
  'click .laptops': function (event) {
    Session.set("product", "laptop");
  },
  'click .tv': function (event) {
    Session.set("product", "tv");
  }
});