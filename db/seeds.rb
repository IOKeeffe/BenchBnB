# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Bench.delete_all
benches = [
  {
    description: "A bench",
    lat: 37.752651,
    lon: -122.459065,
    owner_id: User.all.sample.id
  },
  {
    description: "Another bench",
    lat: 37.753657,
    lon:-122.446444,
    owner_id: User.all.sample.id
  },
  {
    description: "A third bench",
    lat: 37.793875,
    lon:-122.464075,
    owner_id: User.all.sample.id
    }
]

benches.each do |bench|
  Bench.create!(bench)
end
