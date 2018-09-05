class CreatePeopleTable < ActiveRecord::Migration[5.2]
  def change
    create_table :people_tables do |t|
      t.string :name, :null, false
      t.int :house_id, :null, false

      t.timestamps
    end
    add_inde
  end
end
