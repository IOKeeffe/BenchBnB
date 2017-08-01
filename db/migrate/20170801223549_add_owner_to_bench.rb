class AddOwnerToBench < ActiveRecord::Migration[5.0]
  def change
    add_column :benches, :owner_id, :integer, null: false
  end
end
