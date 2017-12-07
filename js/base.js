;(function () {
	'use strict';
	
	var $from_add_task = $('.add-task')
		, new_task = {}
		, task_list = {}
	;
	init();

	
	function add_task(new_task) {
		/**
		 * 将新的task推入TaskList
		 */
		task_list.push(new_task);
		/**
		 * 更新localStorage
		 */
		store.set('task_list', task_list);
		console.log('task_list', task_list)
		return true;
		
	}
	
	function init() {
		
		task_list = store.get('task_list') || [];
		
	}
	
	function render_task_list() {
		
		for (var i = 0; i < render_task_tpl; i++) {
			var $task = render_task_tpl(task_list[i]);
			
		}
		
	}
	
	function render_task_tpl(data) {
		
		var list_item_tpl = '<div class="task-item">' +
		                    '<span class="task-content"><input type="checkbox"></span>' +
		                    '<span class="task-content">' +
		                    data.content +
		                    '</span>' +
		                    '<span>删除</span>' +
		                    '<span>详情</span>' +
		                    '</div>';
		
		return $(list_item_tpl);
		
	}
	
	
	$from_add_task.on('submit', function (e) {
		
		/**
		 * 禁用默认行为
		 */
		e.preventDefault();
		/**
		 * 获取新task的值
		 */
		new_task.content = $(this).find('input[name=content]').val();
		
		/**
		 * 如果新task值为空 则直接返回 否则继续执行
		 */
		if (!new_task.content) {
			return;
		}
		console.log('new_task', new_task);
		/**
		 * 存入新task
		 */
		if (add_task(new_task)) {
			render_task_list();
		}
		
		
		
	});
})();




