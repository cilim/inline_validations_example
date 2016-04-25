# == Schema Information
#
# Table name: posts
#
#  id          :integer          not null, primary key
#  name        :string
#  author      :string
#  category    :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Post < ActiveRecord::Base
  CATEGORIES = %w(horror comedy drama biography)
  validates_presence_of :name, :author, :description
  validates_inclusion_of :category, in: CATEGORIES
end
