class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :name
      t.string :author
      t.string :category
      t.text :description

      t.timestamps null: false
    end
  end
end
