class ApplicationController < ActionController::Base
  #JSONリクエストの場合はCSRFトークンチェックをしない
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authenticate_user!
end
