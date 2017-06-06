class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.text :content
      t.integer :status, limit: 4
    end
  end
end
