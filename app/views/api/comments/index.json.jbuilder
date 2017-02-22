@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :body, :id
    json.posted format_time(time_ago_in_words(comment.updated_at))
    json.set! :author do
      json.extract! comment.author, :username, :url, :id
    end
  end
end
