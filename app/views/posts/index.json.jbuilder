json.array!(@posts) do |post|
  json.extract! post, :id, :name, :author, :category, :description
  json.url post_url(post, format: :json)
end
