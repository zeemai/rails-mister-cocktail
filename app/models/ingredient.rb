class Ingredient < ApplicationRecord
  validates :name, presence: true
  has_many :doses
  validates_uniqueness_of :name
end
