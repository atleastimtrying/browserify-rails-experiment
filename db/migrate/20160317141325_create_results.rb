class CreateResults < ActiveRecord::Migration
  def change
    create_table :results do |t|
      t.string :label
      t.datetime :time

      t.timestamps null: false
    end
  end
end
