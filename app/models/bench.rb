# == Schema Information
#
# Table name: benches
#
#  id          :integer          not null, primary key
#  description :string           not null
#  lat         :float            not null
#  lon         :float            not null
#

class Bench < ApplicationRecord
  validates :description, :lat, :lon, presence: true
  
  belongs_to :owner,
    class_name: "User",
    foreign_key: owner_id,
    primary_key: id

end
