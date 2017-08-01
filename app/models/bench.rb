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


end
